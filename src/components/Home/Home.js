import { View } from '@aws-amplify/ui-react';
import HeroLayout1 from '../../ui-components/HeroLayout1'
import Features2x3 from '../../ui-components/Features2x3'
import HeroLayout3 from '../../ui-components/HeroLayout3'

export function Home() {
  return (
    <View>
      <HeroLayout1 />
      <Features2x3 />
      <HeroLayout3 />
    </View>
  );
}