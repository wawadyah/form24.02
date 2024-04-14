<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid;

class FormController extends Controller
{
    public function index(){
        $uuid = Uuid::uuid4()->toString();
        $form = Form::all();
        return Inertia::render('Dash', ['uuid' => $uuid, 'forms' => $form]);
    }

    public function create($uuid){
        return Inertia::render('Form', ['uuid' => $uuid]);
    }

    public function save(Request $request){
        // $category = Form::create($request->json()->all());
    
        $form = new Form();
        $data = array(
        'uuid' => $request->input('localUuid'), 
        'question' => json_encode($request->input('questions')),
        'title' => $request->input('title'),
        'desc' => $request->input('desc'),
        );
        $form->create($data);

        return redirect()->route('Dash');

    }

   
}
