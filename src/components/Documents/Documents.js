import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
export function Documents() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === 'authenticated' ? 'Documents' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
}