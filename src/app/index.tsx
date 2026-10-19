
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [course, setCourse] = useState('Software Engineering');
  const [agree, setAgree] = useState(false);
  const [notifications, setNotifications] = useState(true);

  function handleSubmit() {
    const formData = {
      name,
      email,
      gender,
      course,
      agree,
      notifications,
    };

    console.log('Submitted form data:', formData);

    Alert.alert(
      'Form Submitted',
      JSON.stringify(formData, null, 2)
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ padding: 20, paddingTop: 20 }}
      >
      <Text>Registration Form</Text>

      <Text>Name</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />

      <Text>Email</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text>Gender</Text>

      {['Male', 'Female'].map((item) => (
        <Pressable
          key={item}
          onPress={() => setGender(item)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
          }}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              borderWidth: 2,
              borderColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 8,
            }}
          >
            {gender === item && (
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: 'black',
                }}
              />
            )}
          </View>
          <Text>{item}</Text>
        </Pressable>
      ))}

      <Text>Course</Text>

      {[
        'Software Engineering',
        'Cyber Security',
        'AI',
      ].map((item) => (
        <Pressable
          key={item}
          onPress={() => setCourse(item)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
          }}
        >
          <Text>
            {course === item ? '🔘' : '⚪'} {item}
          </Text>
        </Pressable>
      ))}

      <Pressable
        onPress={() => setAgree((previous) => !previous)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
        }}
      >
        <Text>{agree ? '☑' : '☐'} Accept terms</Text>
      </Pressable>

      <Text>Notifications</Text>

      <Switch
        value={notifications}
        onValueChange={setNotifications}
      />

      <Button
        title="Submit Form"
        onPress={handleSubmit}
      />
      </ScrollView>
    </>
  );
}
