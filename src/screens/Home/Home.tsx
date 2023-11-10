import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { setSearchTerm, fetchMovies } from "../../redux/actions/movieActions";
import { useNavigation } from "@react-navigation/native";

import InputField from "./components/InputField";
import MovieCard from "./components/MovieCard";

import { styles } from "./styles";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: any) => state.searchTerm);
  const movies = useSelector((state: any) => state.movies);
  const error = useSelector((state: any) => state.error);
  const isLoading = useSelector((state: any) => state.isLoading);

  const navigation = useNavigation();

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchMovies(searchTerm));
    }
  }, [searchTerm, dispatch]);

  const handleCardPress = (movie: any) => {
    navigation.navigate("DetailScreen", { movie });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <InputField
          value={searchTerm}
          placeholder="Search for a movie..."
          onChangeText={(text) => dispatch(setSearchTerm(text))}
        />
      </View>

      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginTop: 20 }}
        />
      )}

      {error && <Text style={{ color: "red" }}>{error}</Text>}

      {movies.length === 0 && !isLoading ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            {searchTerm
              ? `No movies available for "${searchTerm}"`
              : "Search in the search bar to get movies."}
          </Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.imdbID}
          renderItem={({ item }) => (
            <MovieCard movie={item} onPress={() => handleCardPress(item)} />
          )}
        />
      )}
    </View>
  );
};

export default Home;
