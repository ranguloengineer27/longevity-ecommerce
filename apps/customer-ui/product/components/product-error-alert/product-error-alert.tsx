import { Button } from "@chakra-ui/react";
import AlertError from "@ui/components/alert-error";
import React from "react";

const ProductErrorAlert = () => {
  return (
    <AlertError
      title="An unexpected error happened"
      description={
        <>
          <p className="mb-2!">There was an error getting products</p>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </Button>
        </>
      }
    />
  );
};

export default ProductErrorAlert;
