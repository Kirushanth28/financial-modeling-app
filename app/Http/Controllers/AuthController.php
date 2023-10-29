<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use jeremykenedy\LaravelRoles\Models\Role;

class AuthController extends Controller
{
    public function showRegistrationPage()
    {
        return Inertia::render('register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required','max:50', 'unique:users,name'],
            'email' => ['required', 'email', 'max:50', 'unique:users,email'],
            'password' => ['required', 'min:5', 'max:20'],
            'password_confirmation' => 'required|same:password',
        ]);
        $request->merge(['password' => bcrypt($request->password)]);

        session()->flash('success', 'Your account has been created.');
        $user = User::create($request->all());
        $userRole = Role::where('slug','user')->first();
        $user->attachRole($userRole);

        Auth::login($user);

        return redirect()->intended('/home'); // Redirect to your desired page after registration
    }

    public function showLoginPage()
    {
        return Inertia::render('login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email_or_name' => 'required',
            'password' => 'required'
        ]);

        if (Auth::attempt(['email' => $request->email_or_name, 'password' => $request->password]) ||
            Auth::attempt(['name' => $request->email_or_name, 'password' => $request->password])){
            session()->regenerate();
            return redirect()->route('home')->with(['success' => 'You are logged in.']);
        } 
        return redirect()->route('login')->with('error', 'Invalid credentials');
    }
}