import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class RegistrationScreen extends StatefulWidget {
  @override
  _RegistrationScreenState createState() => _RegistrationScreenState();
}

class _RegistrationScreenState extends State<RegistrationScreen> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  Future<void> registerUser(String email, String password) async {
  // Replace 'your-vercel-project.vercel.app' with your actual Vercel project URL
  String apiUrl = 'https://ddos-protection-3ekr9vr94-jays-projects-319a96dd.vercel.app/users/register';

  try {
    // Make POST request to register user
    var response = await http.post(
      Uri.parse(apiUrl),
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonEncode({
        'email': email,
        'password': password,
      }),
    );

    // Handle response based on status code
    if (response.statusCode == 200) {
      // Registration successful
      print('User registered successfully!');

      // Example: You might handle navigation or show a success message
    } else {
      // Handle other status codes (e.g., 401 for authentication issues)
      print('Failed to register user: ${response.statusCode}');
      print('Response body: ${response.body}');
    }
  } catch (e) {
    // Handle network errors or exceptions
    print('Error registering user: $e');
  }
}
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('User Registration'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            TextField(
              controller: _emailController,
              decoration: InputDecoration(
                labelText: 'Email',
              ),
            ),
            TextField(
              controller: _passwordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: 'Password',
              ),
            ),
            SizedBox(height: 16.0),
            ElevatedButton(
              onPressed: () {
                String email = _emailController.text.trim();
                String password = _passwordController.text.trim();
                registerUser(email, password);
              },
              child: Text('Register'),
            ),
          ],
        ),
      ),
    );
  }
}
