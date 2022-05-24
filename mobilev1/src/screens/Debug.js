import React from 'react';
import { StyleSheet, Image, View, ActivityIndicator, Text  } from 'react-native';

export const Debug = () => {
    return (
        <>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#E5E5E5',
                }}>
                <Image style={styles.image} source={require("../assets/Logo.png")} />
                <Text>Debugging</Text>
                <ActivityIndicator size="large"/> 
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 200,
        alignSelf: "center",
        margin: 40,
    }
})
