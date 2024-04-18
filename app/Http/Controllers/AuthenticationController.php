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

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'name' => ['required'],
            'password' => ['required'],
        ]);
    
        if (Auth::attempt($credentials)) {
            if (Auth::user()->status != 'active') {
                Auth::logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();
    
                return to_route('loginn')->with('messages', 'Your account is not active yet, please contact admin');
            }
    
            $request->session()->regenerate();
            $authData = Auth::user()->name;
            if (Auth::user()->role_id == 1) {
                return to_route('admin');
            } else {
                return to_route('client');
            }
        } else {
            return to_route('loginn')->with('messages', 'Account has not been registered');
        }
    }

    public function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return to_route('loginn');
    }

    public function showUser(){
        $user = User::where('role_id', 2)->where('status', 'active')->get();
        return Inertia::render("");
    }

    public function newUser(){
        $user = User::where('role_id', 2)->where('status', 'inactive')->get();
        return Inertia::render('');
    }
    
    public function approve($id){
        $user = User::where('id', $id)->first();
        $user['status'] = 'active';
        $user->save();

        return redirect()->back();
    }
    
    public function destroy($id){
        $user = User::where('id', $id)->first();
        $user->delete();
        return redirect('')->back();
    }



}
