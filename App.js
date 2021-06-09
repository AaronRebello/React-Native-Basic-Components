import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { LogBox } from 'react-native';
import Avatar from './Components/Avatar';
import CustomButtons from './Components/Buttons/CustomButtons';
import Home from './Components/Home'
import StateDemo from './Components/StateDemo';
import ScrollViews from './Components/ScrollViews';
import TextInputDemo from './Components/TextInputDemo';
import PropsDemo from './Components/PropsDemo';
import ModalDemo from './Components/ModalDemo';
import DrawerDemo from './Components/DrawerDemo';
import WebViewDemo from './Components/WebViewDemo';
import FlatListDemo from './Components/FlatListDemo';
import ViewProps from './ComponentProps/ViewProps';
import TextProps from './ComponentProps/TextProps';
import ButtonProps from './ComponentProps/ButtonProps';
import ImageProps from './ComponentProps/ImageProps';
import ImageZoomProps from './ComponentProps/ImageZoomProps';
import TextInputProps from './ComponentProps/TextInputProps/TextInputProps';
import AutocompleteDemo from './ComponentProps/TextInputProps/AutocompleteDemo';
import VideoDemo from './Components/VideoDemo';
import ConvertText from './ComponentProps/TextInputProps/ConvertText';
import NumericInput from './ComponentProps/TextInputProps/NumericInput'
import TextInputWithImage from './ComponentProps/TextInputProps/TextInputWithImage'
import TextInputValidate from './ComponentProps/TextInputProps/TextInputValidate';
import CarouselDemo from './Components/CarouselDemo';
import GeolocationDemo from './AdvanceComponents/GeolocationDemo';
import UniqueDeviceId from './AdvanceComponents/UniqueDeviceId';
import ActionButtonDemo from './Components/Buttons/ActionButtonDemo';
import CardsDemo from './Components/CardsDemo';
import CircleButtonDemo from './Components/Buttons/CircleButtonDemo';
import GooglePlaystoreDemo from './AdvanceComponents/GooglePlaystoreDemo';
import SearchableDropdownDemo from './AdvanceComponents/SearchableDropdownDemo';
export default function App() {


  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Home />
        <Avatar />
        <CustomButtons />
        <ScrollViews />
        <StateDemo />
        <TextInputDemo />
        <PropsDemo name="Dell" model="E5470" />
        <ModalDemo />
        <WebViewDemo />
        <FlatListDemo />
        <ViewProps />
        <TextProps />
        <ButtonProps />
        <ImageProps />
        <ImageZoomProps />
        <TextInputProps />
        <AutocompleteDemo />
        <VideoDemo />
        <ConvertText/>
        <NumericInput/>
        <TextInputWithImage/>
        <TextInputValidate/>
        <CarouselDemo/>
        <GeolocationDemo />
        <UniqueDeviceId />
        <ActionButtonDemo />
        <CardsDemo />
        <CircleButtonDemo />
        <GooglePlaystoreDemo />
        <SearchableDropdownDemo />
        {/* <DrawerDemo />
      {/* <StatusBar style="auto" /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver'
  },
});
