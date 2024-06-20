"use client";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createDocumen = useMutation(api.documents.createDocument);
  const documents = useQuery(api.documents.getDocuments);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <div>
          <button onClick={() => createDocumen({ title: "hello world" })}>
            Click Me
          </button>

          {documents?.map((doc) => <div key={doc._id}>{doc.title}</div>)}
        </div>
      </Authenticated>
    </main>
  );
}
