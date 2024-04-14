<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Form;
use App\Models\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ResponseController extends Controller
{
    public function field($uuid){
        $form = Form::where('uuid', $uuid)->first();
        $id = $form->id;
        $soal = Response::where('form_id', $id)->get();
        $form->question = json_decode($form->question, true);
        return Inertia::render('FormTest', ['form' => $form, 'answers' => $soal]);
    }

    public function store( Request $request){
        
        $validatedData = $request->validate([
            'answer' => 'required',
        ]);

        $response = new Response();
        $data = array(
            'form_id' => $request->input('form_id'),
            'answer' => json_encode($request->input('answers')),
        );
        $response->create($data);

        return redirect()->route('Dash');
    }

    // public function response(){
    //     $response = Response::all();
    //     return Inertia::render('FormResponse', ['responses' => $response]);
    // }
}
