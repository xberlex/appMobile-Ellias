import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import useUserData from '../hooks/useUserData';
import UserCard from '../components/UserCard';

export default function Dashboard({ navigation }) {
  const { users, loading: loadingUsers } = useUserData();
  const [posts, setPosts] = useState([]);
  const [loadingApi, setLoadingApi] = useState(true);

  useEffect(() => {
    async function loadApi() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
      setPosts(res.data);
      setLoadingApi(false);
    }

    loadApi();
  }, []);

  if (loadingUsers || loadingApi) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#006400" />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Usuários do Firebase:</Text>
      <FlatList data={users} keyExtractor={item => item.id} renderItem={({ item }) => <UserCard data={item} />} />

      <Text style={{ fontSize: 22, marginTop: 20 }}>Posts da API:</Text>
      {posts.map(post => (
        <Text key={post.id} style={{ marginBottom: 10 }}>{post.title}</Text>
      ))}
    </View>
  );
}