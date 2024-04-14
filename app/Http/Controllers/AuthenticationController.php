<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthenticationController extends Controller
{
    public function index(){
        return Inertia::render('Login');
    }

    public function store(Request $request){
    $validatedData = $request->validate([
        'name' => 'required|unique:users|max:255',
        'password' => 'required|min:5|max:255',
        'email' => 'required|email|max:255|unique:users,email',
    ]);

    $validatedData['password'] = Hash::make($request->input('password'));
    User::create($validatedData);

    return to_route('loginn')->with('success', 'User successfully added!!');
    }

    public function authenticate(Request $request){

        // $request->authenticate();
        // $request->session()->regenerate();

        $credentials = $request->validate([
            'name' => ['required'],
            'password' => ['required'],
        ]);

        if(Auth::attempt($credentials)){

            if(Auth::user()->status != 'active'){
                Auth::logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();

                // Session::flash('status', 'failed');
                // Session::flash('message', 'Your acoount is not active yet, please contact admin');
                
                return to_route('loginn')->with('messages','Your acoount is not active yet, please contact admin');
            } 

            if(Auth::user()->role_id == 1){
                $request->session()->regenerate();
                return to_route('Dash');
            } else{
                $request->session()->regenerate();
                return to_route('Dash');
            }
        } else{
            return to_route('loginn')->with('messages', 'Account have not registered');
        }

        // return to_route('Dash');
    }
}
