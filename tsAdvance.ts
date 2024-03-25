import { z } from 'zod';
import express from "express";

const app = express();
//Pick
interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }
  
  // For a profile display, only pick `name` and `email`
  type UserProfile = Pick<User, 'name' | 'email'>;
  
  const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };

//Partial
interface User {
    id2: string;
    name: string;
    age2: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age2' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})

//ReadOnly
interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

//ReadOnly 2nd way(easier with next to no repetation)
// interface Config {
//     endpoint: string;
//     apiKey: string;
//   }
  
//   const config: Readonly<Config> = {
//     endpoint: 'https://api.example.com',
//     apiKey: 'abcdef123456',
//   };
  
//   // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

//Record
//without Record
interface User2 {
    id3: string;
    name: string;
  }
  
  type Users = { [key: string]: User2 };
  
  const users: Users = {
    'abc123': { id3: 'abc123', name: 'John Doe' },
    'xyz789': { id3: 'xyz789', name: 'Jane Doe' },
  };
//with Record
interface User3 {
    id4: string;
    name: string;
  }
  
  type Users2 = Record<string, User3>;
  
  const users2: Users2 = {
    'abc123': { id4: 'abc123', name: 'John Doe' },
    'xyz789': { id4: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users2['abc123']); // Output: { id: 'abc123', name: 'John Doe' } 

//Map
interface User5 {
    id5: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, User5>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id5: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id5: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

//Exclude
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

//Type Inference

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);