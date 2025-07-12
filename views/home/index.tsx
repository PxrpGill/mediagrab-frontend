import type { NextPage } from "next";

import { Downloader } from "@/features";
import { BlobAnimation } from "@/shared/ui/blobs";

export const Home: NextPage = () => {
  return (
    <>
      <Downloader />
      <BlobAnimation />
    </>
  );
};
