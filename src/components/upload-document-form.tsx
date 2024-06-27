"use client";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "./loading-button";
import { Id } from "../../convex/_generated/dataModel";

const formSchema = z.object({
  title: z.string().min(2).max(100),
  file: z.instanceof(File).nullable(),
});

const UploadDocumentForm = ({ onUpload }: { onUpload: () => void }) => {
  const { toast } = useToast();

  const createDocumen = useMutation(api.documents.createDocument);
  const generateUploadUrl = useMutation(api.documents.generateUploadUrl);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      file: null,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const url = await generateUploadUrl();
    console.log({ url });
    const result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": values.file?.type! },
      body: values.file,
    });

    if (!result.ok) {
      toast({
        title: "Upload Failed",
        description: "Your document could not be uploaded.",
        variant: "destructive",
      });
      return;
    }

    const { storageId } = await result.json();

    await createDocumen({
      title: values.title,
      fileId: storageId as Id<"_storage">,
    }).finally(() => {
      form.reset();
    });

    onUpload();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Document Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Document</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".txt, .doc, .docx, .pdf, .xml"
                  {...fieldProps}
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          isLoading={form.formState.isSubmitting}
          loadingText="Uploading..."
        >
          Upload
        </LoadingButton>
      </form>
    </Form>
  );
};

export default UploadDocumentForm;
