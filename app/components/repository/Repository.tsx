import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Repository(props: any) {
  const repoDetails = props.repoDetails;

  return (
    <Card className="ml-9 mt-6">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 break-words">
          {repoDetails.repositoryName}
        </Typography>
        <Typography>{repoDetails.repositoryDescription}</Typography>
        <Typography className="break-words">Repository path: {repoDetails.destinationDir}</Typography>
      </CardBody>
      <CardFooter className="grid grid-cols-1 gap-2">
        <Button onClick={() => props.onPushChanges(repoDetails)}>
          Check & Push Changes
        </Button>
      </CardFooter>
    </Card>
  );
}
