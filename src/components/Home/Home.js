import { View } from '@aws-amplify/ui-react';
import Hero1 from './Detail/Hero1'
import Features from './Detail/Features'
import CallToAction from './Detail/CallToAction'
import Footer from '../Footer/Footer'

export function Home() {
  return (
    <View>
      <Hero1 />
      <Features />
      <CallToAction />
      <Footer />
    </View>
  );
}