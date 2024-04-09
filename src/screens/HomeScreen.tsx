import { useTheme } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react'
import {Text, ScrollView, View, Image, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '@expo/vector-icons/MaterialIcons'
import MasonryList from '@react-native-seoul/masonry-list';
import {BlurView} from 'expo-blur';
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBackdrop from '../components/CustomBackdrop';
import FilterView from '../components/FilterView';

const CATEGORIES = [
  'Clothing',
  'Shoes',
  'Accessories',
  'Glasses',
  'Woman Shoes',
  'Man Shoes'
]

const AVATAR_URL = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HomeScreen = () => {
  const {colors} = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openFilterModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{paddingVertical: 24, gap: 24}}>
        {/* Header Section */}
        <View style={{paddingHorizontal: 24, flexDirection: "row", alignItems: "center", gap: 8}}>
          <Image source={
            {
              uri: AVATAR_URL
            }
          }
           style={{width: 52, aspectRatio: 1, borderRadius: 52}} resizeMode='cover'/>
           <View style={{flex: 1}}>
              <Text style={{fontSize: 18, fontWeight: "600", marginBottom: 8, color: colors.text}} numberOfLines={1}>Hi, James! 👋</Text>
              <Text style={{color: colors.text, opacity: 0.75}} numberOfLines={1}>Discover fashion that suit your style</Text>
           </View>
           <TouchableOpacity
              style={{
                width: 52,
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: 52,
                borderWidth: 1,
                borderColor: colors.border

              }}
           >
              <Icons name='notifications' size={24} color={colors.text}/>
           </TouchableOpacity>
        </View>

        {/* Search Bar Section */}
        <View style={{flexDirection: "row", paddingHorizontal: 24, gap: 12}}>
              <TouchableOpacity style={{flex: 1, height: 52, flexDirection: "row", borderRadius: 52, borderWidth: 1, borderColor: colors.border, alignItems: "center", paddingHorizontal: 24, gap: 12}}>
                  <Icons name='search' size={24} color={colors.text} style={{opacity: 0.5}}/>
                  <Text style={{flex:1, fontSize: 16, color: colors.text, opacity: 0.5}}>Search</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={openFilterModal}
              style={{
                width: 52,
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: 52,
                backgroundColor: colors.primary

              }}
           >
              <Icons name='tune' size={24} color={colors.background}/>
           </TouchableOpacity>
        </View>

        {/* Grid Collection View */}
        <View style={{paddingHorizontal: 24}}>
          {/* Title bar */}
          <View
            style={{
              flexDirection: "row",
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 12
            }}
          >
            <Text style={{fontSize: 20, fontWeight: '700'}}>New Collections</Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', height: 200, gap: 12}}>
              {/* Card */}
                <Card />
              <View style={{flex: 1, gap: 12}} >
                  <Card />
                  <Card />
              </View>
          </View>
        </View>

        {/* Categories Section  */}
        <FlatList data={CATEGORIES} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 16, gap: 16}} renderItem={({item, index}) => {
          const isSelected = categoryIndex === index;
          return (
          <TouchableOpacity onPress={() => setCategoryIndex(index)} style={{
            backgroundColor: isSelected ? colors.primary : colors.card, 
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderRadius: 100,
            borderWidth: isSelected ? 0 : 1,
            borderColor: colors.border,
            }}>
            <Text style={{
              color: isSelected ? colors.background : colors.text, fontWeight: '600', fontSize: 16, opacity: isSelected ? 1 : 0.5,
            }}>{item}</Text>
          </TouchableOpacity >
          )}
        }/>

        {/* Masonry List*/}
        
        <MasonryList 
        data={[1,2,3,454,4,56,44]}
        keyExtractor={(item): string => item}
        numColumns={2}
        contentContainerStyle={{paddingHorizontal: 16}}
        showsVerticalScrollIndicator={false}
        renderItem={({item,i}) => (
          <View style={{padding: 6}}>
          <View style={{
            aspectRatio: i === 0 ? 1 : 2 / 3,
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'red',
            borderRadius: 24,
          }}>
            <Image 
              source={{
                uri: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              resizeMode='cover'
              style={StyleSheet.absoluteFill}
            />
            <View 
              style={[StyleSheet.absoluteFill, {
                padding: 12
              }]}
            >
              <View style={{flexDirection: 'row', gap: 8, padding: 4}}>
                <Text 
                  style={{
                    flex: 1,
                    fontSize: 16,
                    fontWeight: '600',
                    color: colors.text,
                  }}
                >
                  Nike Air Jordan
                </Text>
                <View style={{
                  backgroundColor: colors.background,
                  borderRadius: 100,
                  height: 32,
                  aspectRatio: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icons 
                    name='favorite-border'
                    size={20}
                    color={colors.text}
                  />
                </View>
              </View> 
                  <View style={{flex: 1}} />
              <BlurView style={{flexDirection: 'row',backgroundColor: 'rgba(0,0,0,0.35)', alignItems: 'center', padding: 8, borderRadius: 100, overflow: 'hidden'}} intensity={20}>
                <Text style={{flex:1, fontSize: 16, fontWeight: '600', color: "#fff", marginLeft: 4}} numberOfLines={1}>
                  $160.00
                </Text>
                <TouchableOpacity style={{
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 100,
                  backgroundColor: '#fff'
                }}>
                  <Icons name='add-shopping-cart' size={20} color="#000" />
                </TouchableOpacity>
              </BlurView>

            </View>
          </View>
          </View>
        )}
        onEndReachedThreshold={0.1}
        />
        
      </SafeAreaView>
      <BottomSheetModal
        snapPoints={["80%"]}
        index={0}
        ref={bottomSheetModalRef}
        backdropComponent={(props) => <CustomBackdrop {...props}/>}
        backgroundStyle={{
          borderRadius: 24,
          backgroundColor: colors.card,
        }}
        handleIndicatorStyle={{
          backgroundColor: colors.primary,
        }}
      >
        <FilterView />
      </BottomSheetModal>
    </ScrollView>
  );
}

export default HomeScreen

const Card = () => {
  return (
    <View style={{flex: 1, position: 'relative', overflow: 'hidden', borderRadius: 23}}>
      <Image source={{
        uri: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }} resizeMode='cover' style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}/>
      <View style={{position: 'absolute', left: 16, top: 16, paddingHorizontal: 16, paddingVertical: 10, backgroundColor: "rgba(0,0,0,0.25)", borderRadius: 100}}>
        <Text style={{fontSize: 14, fontWeight: '600', color: "#fff"}}>$120</Text>
      </View>
    </View>
              
  )
}
