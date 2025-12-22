import { Container, Stack, Typography } from "@mui/material";

function PostContainer({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode | string[];
}) {
  return (
    <Container maxWidth="lg">
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        textAlign="center"
      >
        <Typography variant="h4">{title}</Typography>
        {description && <Typography>{description}</Typography>}
        {Array.isArray(children) ? (
          <Stack spacing={2}>
            {children.map((child, index) => (
              <Typography key={index}>{child}</Typography>
            ))}
          </Stack>
        ) : (
          children
        )}
      </Stack>
    </Container>
  );
}

export default PostContainer;
