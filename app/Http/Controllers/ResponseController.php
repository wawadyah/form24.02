<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Form;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ResponseController extends Controller
{
    public function field($uuid){
        $form = Form::where('uuid', $uuid)->first();
    $form->question = json_decode($form->question, true);
        return Inertia::render('FormTest', ['form' => $form]);
    }
}
