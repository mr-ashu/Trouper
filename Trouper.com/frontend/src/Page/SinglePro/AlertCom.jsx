import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, useToast } from "@chakra-ui/react";
function AlertCom() {
  // Via instantiation
  const toast = useToast({
    position: "top",
    title: "The item saved in: My first list.",
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
    },
  });

  return (
    <Button
      onClick={() => {
        toast({
          containerStyle: {
            border: "0px solid red",
          },
        });
      }}
    >
      <FavoriteBorderIcon />
    </Button>
  );
}

export default AlertCom;
