<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/reg', [AuthenticationController::class, 'index'])->name('loginn');
Route::post('/saving', [AuthenticationController::class, 'store']);
Route::post('/store-auth', [AuthenticationController::class, 'authenticate']);

Route::get('/', [FormController::class, 'index'])->name('Dash');
Route::get('/form/{uuid}', [FormController::class, 'create']);
Route::post('/save', [FormController::class, 'save']);


Route::get('/form/a/{uuid}',[ResponseController::class, 'field']);
Route::get('/form/a/{uuid}#response',[ResponseController::class, 'response']);
Route::post('/store', [ResponseController::class, 'store']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
