"use client";

import cx from "clsx";
import { motion } from "framer-motion";
import { useEffect } from "react";

import { BLOB_VARIANTS } from "@/shared/models/blob.constantst";

import css from "./index.module.css";

export const BlobAnimation = ({ className }: { className?: string }) => {
  useEffect(() => {
    const interval = setInterval(() => {}, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cx(css.root, className)}>
      <svg
        width="1204"
        height="667"
        viewBox="0 0 1204 667"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FD8232"
          initial={{ d: BLOB_VARIANTS[0].orange[0] }}
          animate={{
            d: [
              BLOB_VARIANTS[0].orange[0],
              BLOB_VARIANTS[0].orange[1],
              BLOB_VARIANTS[0].orange[2],
              BLOB_VARIANTS[0].orange[3],
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#4C2BC0"
          initial={{ d: BLOB_VARIANTS[0].purple[0] }}
          animate={{
            d: [
              BLOB_VARIANTS[0].purple[0],
              BLOB_VARIANTS[0].purple[1],
              BLOB_VARIANTS[0].purple[2],
              BLOB_VARIANTS[0].purple[3],
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#2D9DE7"
          initial={{ d: BLOB_VARIANTS[0].blue[0] }}
          animate={{
            d: [
              BLOB_VARIANTS[0].blue[0],
              BLOB_VARIANTS[0].blue[1],
              BLOB_VARIANTS[0].blue[2],
              BLOB_VARIANTS[0].blue[3],
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};
