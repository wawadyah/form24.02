<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Middleware\OnlyAdmin;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/register', [AuthenticationController::class, 'index'])->name('loginn');
Route::post('/saving', [AuthenticationController::class, 'store']);
Route::post('/store-auth', [AuthenticationController::class, 'authenticate']);
Route::get('/logout', [AuthenticationController::class, 'logout']);

Route::middleware('only_admin')->group(function () {
Route::get('/admin', [FormController::class, 'admin'])->name('admin');
Route::get('/', [FormController::class, 'index'])->name('client');
Route::get('/form/{uuid}', [FormController::class, 'create']);
Route::post('/save', [FormController::class, 'save']);
Route::get('/form/e/{uuid}',[FormController::class, 'edit']);
Route::post('/update', [FormController::class, 'update']);
Route::get('/delete/{id}', [FormController::class, 'delete']);
Route::get('/restore/{id}', [FormController::class, 'restore']);
Route::get('/form/a/trashed', [FormController::class, 'trashed'])->name('trash');
Route::get('/forced/{id}', [FormController::class, 'forced']);


Route::get('/user', [AuthenticationController::class, 'showUser'])->name('user');
Route::get('/user/new', [AuthenticationController::class, 'newUser']);
Route::get('/user/approve/{slug}', [AuthenticationController::class, 'approve']);
Route::get('/user/destroy/{slug}', [AuthenticationController::class, 'destroy']);

});



Route::get('/form/a/{uuid}',[ResponseController::class, 'field']);
Route::get('/form/a/{uuid}#response',[ResponseController::class, 'response']);
Route::post('/store', [ResponseController::class, 'store']);



// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
