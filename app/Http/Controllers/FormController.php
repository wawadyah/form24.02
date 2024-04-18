<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid;
use App\Models\Response;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\DB;

class FormController extends Controller
{
    public function index(){
        $form = Form::all();
        return Inertia::render('Dash', [ 'forms' => $form]);
    }

    public function edit($uuid){
        $form = Form::where('uuid', $uuid)->first();
        $id = $form->id;
        $soal = Response::where('form_id', $id)->get();
        $form->question = json_decode($form->question, true);
        return Inertia::render('FormEdit', ['form' => $form, 'answers' => $soal]);
    }

    public function delete($id){
        $form = Form::where('id', $id)->first();
        $responses = Response::where('form_id',  $id)->first();
        if($responses !== null){
            $responses->delete();
        }
        
        $form->delete();
        return redirect()->back();
    }

    public function trashed(){
        $form = Form::onlyTrashed()->get();
        return Inertia::render('FormDeleted', ['form' => $form]);
    }

    public function restore($id){
        $form = Form::onlyTrashed()->where('id', $id)->first();
        $response = Response::onlyTrashed()->where('form_id', $id)->first();
        $form->restore();
        if($response !== null){
            $response->restore();
        } 
        return to_route('trash');
    }

    public function forced($id){
        $form = Form::onlyTrashed()->where('id', $id)->first();
        $responses = Response::onlyTrashed()->where('form_id', $id)->get();
        // Hapus semua data terkait di tabel responses
        foreach ($responses as $response) {
            $response->forceDelete();
        }
        $form->forceDelete();
        return to_route('trash');
    }

    public function update(Request $request){
        $form = Form::where('id', $request->input('form_id'))->first();
        $data = array(
            'question' => json_encode($request->input('questions')),
        );
        $form->update($data);
        return redirect()->route('admin');
    
    }

    public function admin(){
        $uuid = Uuid::uuid4()->toString();
        $userCount = User::where('status', 'active')->where('role_id', 2)->count();
        $resposesCount = Response::count();
        $formCount = Form::count();
        $formResp = Response::select('form_id', DB::raw('count(*) as count'))
        ->groupBy('form_id')
        ->get();

        $formResponses = [];
        foreach ($formResp as $response) {
            $formResponses[$response->form_id] = $response->count;
        }

        $form = Form::all();
        return Inertia::render('DashAdmin', ['form' => $form, 
        'userCount' => $userCount, 
        'responsesCount' => $resposesCount, 
        'formCount' => $formCount,
        'formResponses' => $formResponses,
        'uuid' => $uuid,
    ]);
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

        return redirect()->route('admin');

    }

   
}
