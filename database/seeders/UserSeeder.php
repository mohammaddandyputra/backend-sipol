<?php

namespace Database\Seeders;

use App\Models\User;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Dandy',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123123123'),
        ],[
            'name' => 'Client',
            'email' => 'client@gmail.com',
            'password' => Hash::make('123123123'),
        ]);
    }
}
