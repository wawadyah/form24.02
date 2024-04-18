<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Form extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'question',
        'uuid',
        'title',
        'desc'
    ];

    protected $attributes = [
        'access' => 'anonymous',
    ];

}
