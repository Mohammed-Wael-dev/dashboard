import { Progress } from "@chakra-ui/react";
export const ProgressBar = ({Barvalue} : {Barvalue: number}) => {
  return (
    <Progress.Root value={Barvalue} maxW="100px" size="sm">
      <Progress.Track rounded="xl">
        <Progress.Range bgColor="brand.purple" w="25%" />
      </Progress.Track>
    </Progress.Root>
  );
};
