<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid;

class FormController extends Controller
{
    public function index(){
        $uuid = Uuid::uuid4()->toString();
        return Inertia::render('Dash', ['uuid' => $uuid]);
    }

    public function create($uuid){
        return Inertia::render('Form', ['uuid' => $uuid]);
    }
}
