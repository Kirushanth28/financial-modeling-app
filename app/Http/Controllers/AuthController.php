<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use jeremykenedy\LaravelRoles\Models\Role;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

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
            'password' => ['required', 'min:8', 'max:20'],
            'password_confirmation' => 'required|same:password',
        ]);

        $request->merge(['password' => bcrypt($request->password)]);

        // Validation passed, create user
        $user = User::create($request->all());
        $userRole = Role::where('slug','user')->first();
        $user->attachRole($userRole);
        session()->flash('success', 'Your account has been created.');

        Auth::login($user);

        return redirect()->intended('/home'); // Redirect to the home page after registration
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
        return back()->withErrors(['invalid_credentials' => 'Invalid email or password']);
    }

    public function logout() {
        Auth::logout();

        return redirect()->route('login')->with(['success' => 'You are logged out.']);
    }
}