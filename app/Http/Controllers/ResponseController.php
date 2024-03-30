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
        $soal = $form->id;
        $form->question = json_decode($form->question, true);
        $id = Response::where('form_id', $soal)->get();
        return Inertia::render('FormTest', ['form' => $form, 'soal' => $id]);
    }

    public function store( Request $request){

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
