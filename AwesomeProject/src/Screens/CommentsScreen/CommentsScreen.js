import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { HeaderCommentsScreen } from "./HederAddPublication/HederAddPublication";
import { AddCommentInput } from "./AddCommentInput/AddCommentInput";

export const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderCommentsScreen />
      <View style={styles.content}>
        <View style={styles.publicationPhoto}></View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.commentContainer}>
            <View style={styles.commentUserPhoto}></View>
            <View style={styles.commentTextBlock}>
              <Text style={styles.commentText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.date}>Date</Text>
            </View>
          </View>
        </ScrollView>
        <AddCommentInput></AddCommentInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  publicationPhoto: {
    width: "90%",
    aspectRatio: 4 / 3,
    backgroundColor: "#bdb6b6",
    marginTop: 30,
    borderRadius: 8,
  },
  scrollContainer: { width: "90%" },
  commentContainer: {
    flexDirection: "row",
    width: "84%",
    marginTop: 30,
    gap: 20,
  },
  commentUserPhoto: {
    width: 40,
    height: 40,
    backgroundColor: "#bdb6b6",
    borderRadius: 20,
  },
  commentTextBlock: {
    padding: 16,
    backgroundColor: "#f7f7f7",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  commentText: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 400,
  },
  date: {
    color: "#BDBDBD",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: 400,
  },
});
