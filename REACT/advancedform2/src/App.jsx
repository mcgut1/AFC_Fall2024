import { useForm } from 'react-hook-form';
import { object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function App() {
  
  const userSchema = object({
    fname: string()
      .required("Please submit first name.")
      .max(5, "Your name is too long."),
    lname: string()
      .required("Please submit last name."),
    age: number()
      .required("Please enter your age.")
      .min(21, "Age must be at least 21"),
    email: string()
      .email("Please enter a valid email address.")
      .required("Email is required."),
    password: string()
      .required("Password is required.")
      .min(6, "Password must be at least 6 characters long."),
  });


  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });


  const onSubmit = (data) => {
    console.log(data); // Log form data
    reset();
  };

  
  const handleChange = (event) => {
    setValue(event.target.name, event.target.value); // Update form value
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fname">
          First Name:
          <input 
            type="text" 
            {...register("fname")}
            id="fname"
            onChange={handleChange}
            autoComplete="no" 
            required
          />
          {errors.fname && <span>{errors.fname.message}</span>}
        </label>
        <br />

        <label htmlFor="lname">
          Last Name:
          <input 
            type="text" 
            {...register("lname")}
            id="lname"
            onChange={handleChange}
            autoComplete="no" 
            required
          />
          {errors.lname && <span>{errors.lname.message}</span>}
        </label>
        <br />

        <label htmlFor="age">
          Age:
          <input 
            type="number" 
            {...register("age")}
            id="age"
            onChange={handleChange}
            autoComplete="no" 
            required
          />
          {errors.age && <span>{errors.age.message}</span>}
        </label>
        <br />

        <label htmlFor="email">
          Email Address:
          <input 
            type="email" 
            {...register("email")}
            id="email"
            onChange={handleChange}
            autoComplete="no" 
            required
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <br />

        <label htmlFor="password">
          Password:
          <input 
            type="password" 
            {...register("password")}
            id="password"
            onChange={handleChange}
            autoComplete="no" 
            required
          />
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
