"use client";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useQuery,
} from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import DocumentCard from "@/components/document-card";
import CreateDocumentButton from "@/components/create-document-button";
import DocumentCardSkeleton from "@/components/document-card-skeleton";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { Skeleton } from "@/components/ui/skeleton";
import PageTitle from "@/components/page-title";
import NothingFound from "@/components/nothing-found";
export default function Home() {
  const documents = useQuery(api.documents.getDocuments);
  return (
    <>
      <Unauthenticated>
        <main className="flex flex-col gap-8 md:gap-16 mx-auto items-center justify-center mt-0 md:mt-20">
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
        <main className=" flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <PageTitle>
              Documents
              <CreateDocumentButton />
            </PageTitle>
          </div>
          {!documents && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3 ">
              {new Array(4).fill(0).map((_, index) => (
                <DocumentCardSkeleton key={index} />
              ))}
            </div>
          )}
          {documents && documents.length > 0 && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3 ">
              {documents?.map((doc) => (
                <DocumentCard key={doc._id} document={doc} />
              ))}
            </div>
          )}

          {documents && documents.length === 0 && (
            <NothingFound message="You have no documents yet.">
              <CreateDocumentButton />
            </NothingFound>
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
              <DocumentCardSkeleton key={index} />
            ))}
          </div>
        </main>
      </AuthLoading>
    </>
  );
}
