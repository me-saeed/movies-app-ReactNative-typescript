import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface MovieCardProps {
  movie: {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
  };
  onPress: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.movieCard}>
        <Image
          source={{ uri: movie.Poster }}
          style={{ width: 300, height: 450, borderRadius: 10 }}
        />
        <Text style={styles.movieTitle}>{movie.Title}</Text>
        <Text style={styles.movieYear}>{movie.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  movieYear: {
    fontSize: 16,
  },
});

export default MovieCard;
