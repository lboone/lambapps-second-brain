"use client";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useQuery,
} from "convex/react";
import { api } from "../../convex/_generated/api";
import DocumentCard from "@/components/document-card";
import CreateDocumentButton from "@/components/create-document-button";
import DocumentSkeleton from "@/components/document-skeleton";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { Skeleton } from "@/components/ui/skeleton";
export default function Home() {
  const documents = useQuery(api.documents.getDocuments);
  return (
    <>
      <Unauthenticated>
        <main className="py-24 flex flex-col gap-8 md:gap-16 mx-auto items-center justify-center mt-0 md:mt-20">
          <h1 className="text-2xl md:text-4xl font-bold ">
            Welcome to Second Brain
          </h1>
          <p className="text-lg">Please sign up to get started</p>
          <div className="w-1/3 text-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-4 flex flex-col gap-4">
            <SignInButton />
          </div>
        </main>
      </Unauthenticated>
      <Authenticated>
        <main className="py-24  flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold ">Documents</h1>
            <CreateDocumentButton />
          </div>
          {!documents && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-4 ">
              {new Array(4).fill(0).map((_, index) => (
                <DocumentSkeleton key={index} />
              ))}
            </div>
          )}
          {documents && documents.length > 0 && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-4 ">
              {documents?.map((doc) => (
                <DocumentCard key={doc._id} document={doc} />
              ))}
            </div>
          )}

          {documents && documents.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-12 pt-12">
              <Image
                src="/no_documents_found.svg"
                alt="No Documents Found"
                width={300}
                height={300}
              />
              <h2 className="text-2xl">You have no documents yet.</h2>
              <CreateDocumentButton />
            </div>
          )}
        </main>
      </Authenticated>
      <AuthLoading>
        <main className="flex flex-col gap-12 w-fullitems-center justify-center mt-0 md:mt-20">
          <div className="flex items-center justify-between">
            <Skeleton className="w-[300px] h-[50px]" />
            <Skeleton className="w-[200px] h-[50px] rounded-full" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-4 ">
            {new Array(4).fill(0).map((_, index) => (
              <DocumentSkeleton key={index} />
            ))}
          </div>
        </main>
      </AuthLoading>
    </>
  );
}
