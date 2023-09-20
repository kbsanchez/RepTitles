import { 
  useAuthenticator, 
  Tabs, 
  TabItem } from '@aws-amplify/ui-react';
import { ReptilesList } from './ReptilesList';


export function Reptiles() {

    return (
      <>

      <Tabs
        justifyContent="flex-start"
      >
        <TabItem title="Reptiles">
          <ReptilesList />
        </TabItem>
        <TabItem title="Groups" isDisabled={true}>
        </TabItem>
        <TabItem title="Documents" isDisabled={true}>
        </TabItem>
        <TabItem title="Transactions" isDisabled={true}>
        </TabItem>
      </Tabs>

      </>

    );
}