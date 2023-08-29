import { 
  useAuthenticator, 
  Heading, 
  Tabs, 
  TabItem, 
  Divider } from '@aws-amplify/ui-react';
import { ReptilesList } from './ReptilesList';
import { AddClutch } from './AddClutch';
import { AddReptile } from './AddReptile';


export function Reptiles() {
    const { route } = useAuthenticator((context) => [context.route]);

    return (
      <>
      <Tabs
        justifyContent="flex-start"
      >
        <TabItem title="Your Reptiles">
          <ReptilesList />
        </TabItem>
        <TabItem title="Add Clutch">
          <AddClutch />
        </TabItem>
        <TabItem title="Add Reptile">
          <AddReptile />
        </TabItem>
      </Tabs>
      </>

    );
}