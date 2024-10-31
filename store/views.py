from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Product, Cart, CartItem

def home(request):
    featured_products = Product.objects.filter(featured=True)[:3]
    return render(request, 'store/home.html', {'featured_products': featured_products})

def product_list(request):
    products = Product.objects.all()
    return render(request, 'store/product_list.html', {'products': products})

def about(request):
    return render(request, 'store/about.html')

def contact(request):
    if request.method == 'POST':
        messages.success(request, 'Your message has been sent!')
        return redirect('contact')
    return render(request, 'store/contact.html')

@login_required
def add_to_cart(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    cart, created = Cart.objects.get_or_create(user=request.user)
    cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
    
    if not created:
        cart_item.quantity += 1
        cart_item.save()
    
    messages.success(request, f'{product.name} added to cart.')
    return redirect('product_list')

@login_required
def cart_detail(request):
    cart = Cart.objects.filter(user=request.user).first()
    return render(request, 'store/cart.html', {'cart': cart})