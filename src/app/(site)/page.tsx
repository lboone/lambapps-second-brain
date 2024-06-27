"use client";
import LoadingButton from "@/components/loading-button";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";
import React from "react";
import { GrDocumentPdf } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col gap-8 md:gap-16 mx-auto items-center justify-center mt-0 md:mt-20">
        <h1 className="text-2xl md:text-5xl font-bold ">
          Welcome to second.brain
        </h1>
        <Unauthenticated>
          <p className="text-lg">Please sign in or sign up to get started</p>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <LoadingButton
              variant="outline"
              size="site"
              isLoading={false}
              buttonClass="w-[300px] py-6  text-lg"
            >
              <SignInButton />
            </LoadingButton>
            <LoadingButton
              variant="site"
              size="site"
              isLoading={false}
              buttonClass="w-[300px] py-6  text-lg"
            >
              <SignUpButton />
            </LoadingButton>
          </div>
        </Unauthenticated>
        <Authenticated>
          <p className="text-lg">
            Please navigate to the dashboard or begin by uploading a document!
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <LoadingButton
              variant="outline"
              size="site"
              isLoading={false}
              onClick={() => {
                window.location.href = "/dashboard";
              }}
              buttonClass="w-[300px] py-6  text-lg flex items-center gap-3"
            >
              <MdOutlineSpaceDashboard /> Dashboard
            </LoadingButton>

            <LoadingButton
              variant="site"
              size="site"
              isLoading={false}
              onClick={() => {
                window.location.href = "/dashboard/documents";
              }}
              buttonClass="w-[300px] py-6  text-lg flex items-center gap-3"
            >
              <GrDocumentPdf />
              Documents
            </LoadingButton>
          </div>
        </Authenticated>
      </main>
    </>
  );
};

export default LandingPage;
