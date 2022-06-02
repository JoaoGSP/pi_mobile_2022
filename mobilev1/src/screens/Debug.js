import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

export default function Debug() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          height: '90%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <View style={{height: '95%',
            position: 'absolute',
            width: '95%',
            zIndex: 2,
            borderWidth: 3,}}>
                {/*Players Holdder*/}
                <View style={{borderWidth:1, borderColor: 'white', flex: 1}}></View>
                <View style={{borderWidth:1, borderColor: 'white', flex: 1}}>
                <Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderWidth: 3,
                  borderColor: 'black',
                  borderRadius: 80,
                }}>
                <Text>+</Text>
              </Pressable><Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderWidth: 3,
                  borderColor: 'black',
                  borderRadius: 80,
                }}>
                <Text>+</Text>
              </Pressable>
                </View>
                <View style={{borderWidth:1, borderColor: 'white', flex: 1}}>
                <Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderWidth: 3,
                  borderColor: 'black',
                  borderRadius: 80,
                }}>
                <Text>+</Text>
              </Pressable><Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderWidth: 3,
                  borderColor: 'black',
                  borderRadius: 80,
                }}>
                <Text>+</Text>
              </Pressable><Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderWidth: 3,
                  borderColor: 'black',
                  borderRadius: 80,
                }}>
                <Text>+</Text>
              </Pressable><Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderWidth: 3,
                  borderColor: 'black',
                  borderRadius: 80,
                }}>
                <Text>+</Text>
              </Pressable>
                </View>
                <View style={{borderWidth:1, borderColor: 'white', flex: 1}}>
                <Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderWidth: 3,
                  borderColor: 'black',
                  borderRadius: 80,
                }}>
                <Text>+</Text>
              </Pressable><Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderWidth: 3,
                  borderColor: 'black',
                  borderRadius: 80,
                }}>
                <Text>+</Text>
              </Pressable><Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderWidth: 3,
                  borderColor: 'black',
                  borderRadius: 80,
                }}>
                <Text>+</Text>
              </Pressable><Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderWidth: 3,
                  borderColor: 'black',
                  borderRadius: 80,
                }}>
                <Text>+</Text>
              </Pressable>
                </View>
                <View style={{borderWidth:1, borderColor: 'white', flex: 1}}>
                    <Pressable
                    style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderWidth: 3,
                    borderColor: 'black',
                    borderRadius: 80,
                    }}>
                    <Text>+</Text>
                    </Pressable>
                </View>
            </View>
        <View
          style={{
            backgroundColor: 'green',
            height: '95%',
            width: '95%',
            borderWidth: 3,
            borderColor: 'black',
          }}>
          {/*Parte externa*/}
          <View
            style={{
              borderWidth: 3,
              borderColor: 'black',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            {/*Parte superior interna*/}
            <View
              style={{
                borderLeftWidth: 6,
                borderRightWidth: 6,
                borderBottomWidth: 6,
                height: '30%',
                width: '60%',
              }}>
              {/*Area*/}
            </View>
          </View>
          <View
            style={{
              borderWidth: 3,
              borderColor: 'black',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            {/*Parte inferior interna*/}
            <View
              style={{
                borderLeftWidth: 6,
                borderRightWidth: 6,
                borderTopWidth: 6,
                height: '30%',
                width: '60%',
              }}>
              {/*Area*/}
              
            </View>
          </View>
          <View
            style={{
              width: 150,
              height: 150,
              borderWidth: 6,
              borderColor: 'black',
              borderRadius: 100,
              position: 'absolute',
              translateY: 295,
              translateX: 125,
            }}>
            {/*Circulo centrar*/}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
});
