# Creating Custom Facades in Laravel: A Practical Guide

Laravel offers a powerful and expressive syntax for building web applications. One standout feature is **Facades** — they provide a static-like interface to classes that are registered in Laravel's service container.

In this guide, I’ll walk you through creating a custom facade in Laravel, integrating it with a controller, and testing it using Postman. This approach is perfect for wrapping reusable service logic like invoice generation, SMS services, or third-party APIs.

---

## What We Will Build

A simple invoice generator for a car company (e.g., Toyota). We will:

* Create a custom **Invoice** service class
* Wrap it with a custom **InvoiceFacade**
* Bind it in the service container
* Use it via a controller and API route
* Test it using Postman

---

## Step 1: Create a New Laravel Project

```bash
laravel new custom-facade-app
# OR
composer create-project laravel/laravel custom-facade-app
cd custom-facade-app
```

---

## Step 2: Create the Service Class

Create a folder for services and add the `Invoice` class:

```bash
mkdir app/Services
touch app/Services/Invoice.php
```

Add the following code:

```php
<?php

namespace App\Services;

class Invoice
{
    public function generate(string $name, float $amount): array
    {
        return [
            'company' => 'Toyota',
            'customer' => $name,
            'amount' => $amount,
            'status' => 'Invoice Generated'
        ];
    }
}
```

---

## Step 3: Create the Facade

Create a folder for facades and add `InvoiceFacade.php`:

```bash
mkdir app/Facades
touch app/Facades/InvoiceFacade.php
```

Paste this code:

```php
<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class InvoiceFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'invoice';
    }
}
```

---

## Step 4: Bind the Service in `AppServiceProvider`

Open `app/Providers/AppServiceProvider.php` and update the `register()` method:

```php
use App\Services\Invoice;

public function register()
{
    $this->app->singleton('invoice', function () {
        return new Invoice();
    });
}
```

---

## Step 5: Add Alias in `config/app.php`

Open `config/app.php` and add to the aliases array:

```php
'Invoice' => App\Facades\InvoiceFacade::class,
```

---

## Step 6: Create the Controller

Run the command:

```bash
php artisan make:controller InvoiceController
```

Then open `app/Http/Controllers/InvoiceController.php` and add:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Invoice;

class InvoiceController extends Controller
{
    public function generate(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'amount' => 'required|numeric'
        ]);

        $invoice = Invoice::generate($request->name, $request->amount);

        return response()->json($invoice);
    }
}
```

---

## Step 7: Define the API Route

Open `routes/api.php` and add:

```php
use App\Http\Controllers\InvoiceController;

Route::post('/generate-invoice', [InvoiceController::class, 'generate']);
```

---

## Step 8: Test with Postman

* **Method:** POST
* **URL:** 
```json

http://localhost:8000/api/generate-invoice

```
* **Headers:** `Content-Type: application/json`
* **Body (raw JSON):**

```json
{
  "name": "Jane Doe",
  "amount": 25000
}
```

**Expected Response:**

```json
{
  "company": "Toyota",
  "customer": "Jane Doe",
  "amount": 25000,
  "status": "Invoice Generated"
}
```

---

## Benefits of Custom Facades

* Cleaner and centralized logic
* Easy to mock for testing
* Reusable across controllers, services, and jobs
* Makes your codebase more maintainable

---

## Final Thoughts

Creating custom facades in Laravel allows developers to abstract logic, improve code readability, and follow a service-oriented architecture. Whether you’re working on invoicing, notifications, or APIs, facades make your services accessible and consistent.

If you’re building scalable Laravel apps, I highly recommend integrating custom facades into your architecture.

