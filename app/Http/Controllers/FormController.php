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
        return Inertia::render('Dash', ['uuid' => $uuid]);
    }

    public function create($uuid){
        return Inertia::render('Form', ['uuid' => $uuid]);
    }

    public function save(Request $request){
        // $category = Form::create($request->json()->all());
    
        $form = new Form();
        $data = array(
        'uuid' => $request->input('localUuid'), 
        'question' => json_encode($request->input('inputList'))
        );
        $form->create($data);

        return redirect()->route('Dash');

    }
}
