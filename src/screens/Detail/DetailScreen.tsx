import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./styles";
interface DetailScreenProps {
  route: {
    params: {
      movie: {
        Title: string;
        Year: string;
        imdbID: string;
        Poster: string;
        Type: string;
      };
    };
  };
}

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.posterImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>Title: {movie.Title}</Text>
        <Text style={styles.text}>Year: {movie.Year}</Text>
        <Text style={styles.text}>Type: {movie.Type}</Text>
        <Text style={styles.text}>IMDb ID: {movie.imdbID}</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
