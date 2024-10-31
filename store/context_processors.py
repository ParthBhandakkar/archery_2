from .models import Cart

def cart_processor(request):
    if request.user.is_authenticated:
        cart = Cart.objects.filter(user=request.user).first()
        if cart:
            return {'cart_items_count': cart.items.count()}
    return {'cart_items_count': 0}