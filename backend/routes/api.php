<?php

use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Middleware\EnsureTokenIsValid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(["middleware" => EnsureTokenIsValid::class], function () {

    Route::get("/categories", [CategoryController::class, "index"]);
    Route::get("/categories/{id}", [CategoryController::class, "show"]);

    Route::get("/products", [ProductController::class, "index"]);
    Route::get("/products/{id}", [ProductController::class, "show"]);

    Route::post("/register", [AuthController::class, "register"]);
    Route::post("/login", [AuthController::class, "login"]);

    Route::group(["middleware" => "auth:sanctum"], function () {
        Route::post("/categories", [CategoryController::class, "store"]);
        Route::patch("/categories/{id}", [CategoryController::class, "update"]);
        Route::delete("/categories/{id}", [CategoryController::class, "destroy"]);

        // Products Routes
        Route::post("/products", [ProductController::class, "store"]);
        Route::patch("/products/{id}", [ProductController::class, "update"]);
        Route::delete("/products/{id}", [ProductController::class, "destroy"]);

        Route::post("/logout", [AuthController::class, "logout"]);
        Route::get("/user", [AuthController::class, "user"]);
    });
});
