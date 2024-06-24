"use client";
import React, { useState } from "react";
import { Id } from "../../convex/_generated/dataModel";
import { askQuestion } from "../../convex/documents";
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Input } from "./ui/input";
import LoadingButton from "./loading-button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface QuestionFormProps {
  documentId: Id<"documents">;
}
const formSchema = z.object({
  text: z.string().min(10).max(250),
});
const QuestionForm = ({ documentId }: QuestionFormProps) => {
  const [loading, setLoading] = useState(false);
  const askQuestion = useAction(api.documents.askQuestion);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const question = values.text;
    await askQuestion({ question, documentId });
    form.reset();
    setLoading(false);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 gap-2 p-2"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  required
                  {...field}
                  type="text"
                  placeholder="Ask any question about your document..."
                />
              </FormControl>
              <FormMessage className="z-10 absolute bottom-[10%] right-[50%] translate-x-1/2 p-4 border-2 rounded-lg border-red-500" />
            </FormItem>
          )}
        />

        <LoadingButton
          isLoading={loading}
          variant="site"
          size="site"
          type="submit"
          loadingText=""
        >
          Submit
        </LoadingButton>
      </form>
    </Form>
  );
};

export default QuestionForm;
