import csv
import os
from textwrap import dedent
import math # Import math for rounding

# -------------------------------------------------------------------------
# --- THIS IS YOUR MASTER PRODUCT LIST ---
# --- EDIT THIS LIST TO ADD, CHANGE, OR REMOVE PRODUCTS ---
# -------------------------------------------------------------------------
products = [
    # --- AUTOMOTIVE (Category: Standard Automotive) ---
    {
        'id': 101, 'name': 'Willard 619', 'sku': '619', 'category': 'Standard Automotive', 
        'brandName': 'Willard', 'ahCapacity': 43, 'cca': 325, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,450.00', 'isAGM': 'FALSE', 'imagePath': '/images/willard-619-car-battery-alberton.jpg', 
        'popularFits': 'Toyota Tazz, VW Polo Vivo, Opel Corsa', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 102, 'name': 'Willard 652', 'sku': '652', 'category': 'Standard Automotive', 
        'brandName': 'Willard', 'ahCapacity': 70, 'cca': 590, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,150.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Toyota Hilux (Petrol), Ford Ranger (Diesel)', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 103, 'name': 'Willard 669', 'sku': '669', 'category': 'Standard Automotive', 
        'brandName': 'Willard', 'ahCapacity': 80, 'cca': 590, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 3,000.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Mercedes-Benz (Diesel), Commercial Trucks', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 104, 'name': 'Willard 668', 'sku': '668', 'category': 'Standard Automotive', 
        'brandName': 'Willard', 'ahCapacity': 80, 'cca': 590, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,950.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 105, 'name': 'Willard 657', 'sku': '657', 'category': 'Standard Automotive', 
        'brandName': 'Willard', 'ahCapacity': 70, 'cca': 590, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,400.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 106, 'name': 'Willard 651/647', 'sku': '651/647', 'category': 'Standard Automotive', 
        'brandName': 'Willard', 'ahCapacity': 60, 'cca': 460, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,200.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 107, 'name': 'Willard 616', 'sku': '616', 'category': 'Standard Automotive', 
        'brandName': 'Willard', 'ahCapacity': 35, 'cca': 280, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,550.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 108, 'name': 'Willard 628/9', 'sku': '628/9', 'category': 'Standard Automotive', 
        'brandName': 'Willard', 'ahCapacity': 50, 'cca': 335, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 109, 'name': 'Willard 658', 'sku': '658', 'category': 'Standard Automotive', 
        'brandName': 'Willard', 'ahCapacity': 90, 'cca': 630, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 3,050.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Toyota Land Cruiser, Heavy Duty Bakkies', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 110, 'name': 'Willard 646', 'sku': '646', 'category': 'Standard Automotive', 
        'brandName': 'Willard', 'ahCapacity': 55, 'cca': 380, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,900.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Nissan NP200, Renault Sandero, Toyota Yaris', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 111, 'name': 'Exide 636CS', 'sku': '636CS', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 47, 'cca': 345, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,550.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 112, 'name': 'Exide 610', 'sku': '610', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 35, 'cca': 280, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 113, 'name': 'Exide 646CE', 'sku': '646CE', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 58, 'cca': 451, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,900.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 114, 'name': 'Exide 628', 'sku': '628', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 48, 'cca': 385, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 115, 'name': 'Exide 616CS', 'sku': '616CS', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 38, 'cca': 270, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,500.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 116, 'name': 'Exide 622', 'sku': '622', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 52, 'cca': 400, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,800.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 117, 'name': 'Exide 668', 'sku': '668', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 85, 'cca': 715, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,950.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 118, 'name': 'Exide 619CE', 'sku': '619CE', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 42, 'cca': 314, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,450.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 119, 'name': 'Exide 650', 'sku': '650', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 90, 'cca': 750, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 122, 'name': 'Exide 659', 'sku': '659', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 75, 'cca': 775, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 3,500.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 123, 'name': 'Exide 669P', 'sku': '669P', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 85, 'cca': 715, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 3,150.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 126, 'name': 'Exide 658C', 'sku': '658C', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 96, 'cca': 820, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 3,050.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 127, 'name': 'Exide 650CR', 'sku': '650CR', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 90, 'cca': 750, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 128, 'name': 'Exide 657C', 'sku': '657C', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 70, 'cca': 567, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,400.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 130, 'name': 'Exide 651', 'sku': '651', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 60, 'cca': 480, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,200.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 131, 'name': 'Exide 638 (1)', 'sku': '638', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 58, 'cca': 440, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,950.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 132, 'name': 'Exide 652PS', 'sku': '652PS', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 75, 'cca': 660, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 133, 'name': 'Exide 640CE', 'sku': '640CE', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 60, 'cca': 505, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 2,250.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 134, 'name': 'Exide 638 (2)', 'sku': '638', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 58, 'cca': 440, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,950.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 135, 'name': 'Exide 615', 'sku': '615', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 38, 'cca': 270, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,500.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 137, 'name': 'Exide 634', 'sku': '634', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 38, 'cca': 270, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 138, 'name': 'Exide 631', 'sku': '631', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 42, 'cca': 315, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 139, 'name': 'Exide 630', 'sku': '630', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 42, 'cca': 315, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 140, 'name': 'Exide 616C', 'sku': '616C', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 38, 'cca': 270, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,500.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 142, 'name': 'Exide 612', 'sku': '612', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 40, 'cca': 305, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 145, 'name': 'Exide 639', 'sku': '639', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 58, 'cca': 440, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,950.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 146, 'name': 'Exide 621', 'sku': '621', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 47, 'cca': 335, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,800.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 150, 'name': 'Exide 611', 'sku': '611', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 35, 'cca': 280, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 151, 'name': 'Exide 636', 'sku': '636', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 42, 'cca': 315, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 1,800.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 153, 'name': 'Exide SMF101', 'sku': 'SMF101', 'category': 'Standard Automotive', 
        'brandName': 'Exide', 'ahCapacity': 102, 'cca': 710, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 3,350.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },

    # --- PERFORMANCE (Category: Performance AGM/EFB) ---
    {
        'id': 120, 'name': 'Exide 652AGM', 'sku': '652AGM', 'category': 'Performance AGM/EFB', 
        'brandName': 'Exide', 'ahCapacity': 70, 'cca': 760, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 4,250.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 129, 'name': 'Exide 668AGM', 'sku': '668AGM', 'category': 'Performance AGM/EFB', 
        'brandName': 'Exide', 'ahCapacity': 80, 'cca': 800, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 4,400.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 136, 'name': 'Exide 658AGM', 'sku': '658AGM', 'category': 'Performance AGM/EFB', 
        'brandName': 'Exide', 'ahCapacity': 92, 'cca': 900, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 4,700.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 143, 'name': 'Exide 646AGM', 'sku': '646AGM', 'category': 'Performance AGM/EFB', 
        'brandName': 'Exide', 'ahCapacity': 60, 'cca': 680, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 3,550.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': '', 'isScrapPrice': 'TRUE'
    },
    
    # --- TRUCK (Category: Truck & Commercial) ---
    {
        'id': 121, 'name': 'Exide 696C', 'sku': '696C', 'category': 'Truck & Commercial', 
        'brandName': 'Exide', 'ahCapacity': 180, 'cca': 1150, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 6,600.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Heavy Duty Truck', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 124, 'name': 'Exide 683C', 'sku': '683C', 'category': 'Truck & Commercial', 
        'brandName': 'Exide', 'ahCapacity': 115, 'cca': 690, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 4,100.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Commercial Truck', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 125, 'name': 'Exide 689C', 'sku': '689C', 'category': 'Truck & Commercial', 
        'brandName': 'Exide', 'ahCapacity': 132, 'cca': 810, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 4,850.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Commercial Truck', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 141, 'name': 'Exide 682C', 'sku': '682C', 'category': 'Truck & Commercial', 
        'brandName': 'Exide', 'ahCapacity': 115, 'cca': 690, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 4,100.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Commercial Truck', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 144, 'name': 'Exide 674', 'sku': '674', 'category': 'Truck & Commercial', 
        'brandName': 'Exide', 'ahCapacity': 90, 'cca': 800, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 3,200.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Heavy-Duty Truck', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 147, 'name': 'Exide 692C', 'sku': '692C', 'category': 'Truck & Commercial', 
        'brandName': 'Exide', 'ahCapacity': 145, 'cca': 920, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 6,000.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Heavy Duty Truck', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 148, 'name': 'Exide 695CZ', 'sku': '695CZ', 'category': 'Truck & Commercial', 
        'brandName': 'Exide', 'ahCapacity': 230, 'cca': 1350, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 7,700.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Heavy Duty Truck', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 149, 'name': 'Exide 688C', 'sku': '688C', 'category': 'Truck & Commercial', 
        'brandName': 'Exide', 'ahCapacity': 195, 'cca': 1260, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 7,000.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Heavy Duty Truck', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 152, 'name': 'Exide SMF100', 'sku': 'SMF100', 'category': 'Truck & Commercial', 
        'brandName': 'Exide', 'ahCapacity': 102, 'cca': 710, 'warrantyMonths': 24, 
        'sellingPrice_OUTPUT': 'R 3,350.00', 'isAGM': 'FALSE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Commercial Truck', 'isScrapPrice': 'TRUE'
    },
    
    # --- MOTORCYCLE (Category: Motorcycle) ---
    {
        'id': 154, 'name': 'Enertec 12N10-3A', 'sku': '12N10-3A', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 11, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 860.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 155, 'name': 'Enertec 12N12A-4A-1', 'sku': '12N12A-4A-1', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 12, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 860.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 156, 'name': 'Enertec 12N14-3A', 'sku': '12N14-3A', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 14, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 1,000.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 157, 'name': 'Enertec 12N14-3B', 'sku': '12N14-3B', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 14, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 1,000.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 158, 'name': 'Enertec 12N5-3B', 'sku': '12N5-3B', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 5, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 400.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 159, 'name': 'Enertec 12N7-3B', 'sku': '12N7-3B', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 7, 'cca': 0, 'warrantyMonths': 12, # 6.5Ah rounded up
        'sellingPrice_OUTPUT': 'R 480.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 160, 'name': 'Enertec 12N7-4A', 'sku': '12N7-4A', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 7, 'cca': 0, 'warrantyMonths': 12, # 6.5Ah rounded up
        'sellingPrice_OUTPUT': 'R 520.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 161, 'name': 'Enertec 12N7A-3A', 'sku': '12N7A-3A', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 7, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 500.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 162, 'name': 'Enertec 12N9-3B', 'sku': '12N9-3B', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 8, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 600.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 163, 'name': 'Enertec 12N9-4M-1', 'sku': '12N9-4M-1', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 9, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 600.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 164, 'name': 'Enertec YB14LA-2', 'sku': 'YB14LA-2', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 14, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 1,000.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 165, 'name': 'Enertec YB16CL-B', 'sku': 'YB16CL-B', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 16, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 1,720.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 166, 'name': 'Enertec YB30CL-B', 'sku': 'YB30CL-B', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 30, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 2,380.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 167, 'name': 'Enertec YT12A-BS', 'sku': 'YT12A-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 11, 'cca': 0, 'warrantyMonths': 12, # 10.5Ah rounded up
        'sellingPrice_OUTPUT': 'R 740.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 168, 'name': 'Enertec YT9B-4', 'sku': 'YT9B-4', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 9, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 640.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 169, 'name': 'Enertec YTX12-BS', 'sku': 'YTX12-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 12, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 860.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 170, 'name': 'Enertec YTX14-BS', 'sku': 'YTX14-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 12, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 940.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 171, 'name': 'Enertec YTX14AH-BS', 'sku': 'YTX14AH-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 14, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 1,080.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 172, 'name': 'Enertec YTX14L-BS', 'sku': 'YTX14L-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 14, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 1,000.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 173, 'name': 'Enertec YTX16-BS', 'sku': 'YTX16-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 16, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 1,320.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 174, 'name': 'Enertec YTX20-BS', 'sku': 'YTX20-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 20, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 1,480.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 175, 'name': 'Enertec YTX20HL-BS', 'sku': 'YTX20HL-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 20, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 1,340.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 176, 'name': 'Enertec YTX20L-BS', 'sku': 'YTX20L-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 20, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 1,500.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 177, 'name': 'Enertec YTX30L', 'sku': 'YTX30L', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 30, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 2,460.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 178, 'name': 'Enertec YTX4L-BS', 'sku': 'YTX4L-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 4, 'cca': 0, 'warrantyMonths': 12, # 3.5Ah rounded up
        'sellingPrice_OUTPUT': 'R 340.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 179, 'name': 'Enertec YTX5L-BS', 'sku': 'YTX5L-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 5, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 440.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 180, 'name': 'Enertec YTX6.5L-BS', 'sku': 'YTX6.5L-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 7, 'cca': 0, 'warrantyMonths': 12, # 6Ah rounded up
        'sellingPrice_OUTPUT': 'R 460.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 181, 'name': 'Enertec YTX7A-BS', 'sku': 'YTX7A-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 6, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 520.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 182, 'name': 'Enertec YTX7L-BS', 'sku': 'YTX7L-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 6, 'cca': 0, 'warrantyMonths': 12, 
        'sellingPrice_OUTPUT': 'R 559.99', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 183, 'name': 'Enertec YTX9A-BS', 'sku': 'YTX9A-BS', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 8, 'cca': 0, 'warrantyMonths': 12, # 7.5Ah rounded up
        'sellingPrice_OUTPUT': 'R 600.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 184, 'name': 'Enertec YTZ10S', 'sku': 'YTZ10S', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 9, 'cca': 0, 'warrantyMonths': 12, # 8.6Ah rounded up
        'sellingPrice_OUTPUT': 'R 700.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    {
        'id': 185, 'name': 'Enertec YTZ7S', 'sku': 'YTZ7S', 'category': 'Motorcycle', 
        'brandName': 'Enertec', 'ahCapacity': 7, 'cca': 0, 'warrantyMonths': 12, # 6.5Ah rounded up
        'sellingPrice_OUTPUT': 'R 540.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
        'popularFits': 'Motorcycle', 'isScrapPrice': 'TRUE'
    },
    # --- DEEP CYCLE (Category: Deep Cycle/Solar) ---
    # (You don't have these in your list yet, but the category exists)
    # {
    #     'id': 401, 'name': 'Enertec 100Ah Deep Cycle', 'sku': 'DC100', 'category': 'Deep Cycle/Solar', 
    #     'brandName': 'Enertec', 'ahCapacity': 100, 'cca': 0, 'warrantyMonths': 12, 
    #     'sellingPrice_OUTPUT': 'R 2,500.00', 'isAGM': 'TRUE', 'imagePath': '/images/stock-battery.jpg', 
    #     'popularFits': 'Inverter, Solar Backup', 'isScrapPrice': 'FALSE'
    # },
]


# --- FIELDNAMES (Defines CSV columns) ---
fieldnames = [
    'id', 'name', 'sku', 'category', 'brandName', 'ahCapacity', 'cca',
    'warrantyMonths', 'sellingPrice_OUTPUT', 'isAGM', 'imagePath', 'popularFits', 'isScrapPrice'
]

csv_file_path = 'product_master_template.csv'
output_dir = 'src/data'
output_file = os.path.join(output_dir, 'products.ts')

# -----------------------------------------------------------------------------------------
# --- 2. SCRIPT LOGIC (No need to edit below here) ---
# -----------------------------------------------------------------------------------------

def get_seo_subtitle(category):
    """Generates a uniform, localized SEO subtitle based on the product category."""
    if category == 'Standard Automotive':
        return "Car Battery in Alberton"
    elif category == 'Performance AGM/EFB':
        return "AGM & EFB Battery in Alberton"
    elif category == 'Deep Cycle/Solar':
        return "Solar & Inverter Battery in Alberton"
    elif category == 'Truck & Commercial':
        return "Truck & Commercial Battery in Alberton"
    elif category == 'Motorcycle':
        return "Motorcycle Battery in Alberton"
    else:
        return "Battery in Alberton"

def read_csv_data(filepath):
    data = []
    if not os.path.exists(filepath):
        print(f"Warning: '{filepath}' not found. Using hardcoded data from script.")
        return products 
        
    with open(filepath, mode='r', newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    return data

def format_to_typescript(raw_data):
    ts_data_rows = []
    for row in raw_data:
        # Generate the SEO subtitle
        seo_subtitle = get_seo_subtitle(row['category'])

        # Data conversion and mapping
        product = {
            "id": int(row['id']),
            "name": row['name'],
            "sku": row['sku'],
            "category": row['category'],
            "brandName": row['brandName'].replace(' ', ''), 
            "ahCapacity": math.ceil(float(row['ahCapacity'])), # Round up Ah
            "cca": int(row['cca']),
            "warrantyMonths": int(row['warrantyMonths']),
            "priceAnchor": row['sellingPrice_OUTPUT'],
            "isAGM": row['isAGM'].upper() == 'TRUE',
            "imagePath": row['imagePath'],
            "popularFits": row.get('popularFits', ''),
            "isScrapPrice": row.get('isScrapPrice', 'TRUE').upper() == 'TRUE',
            "seoSubtitle": seo_subtitle # Add the new field
        }
        
        # Manually create the object string for precise TS formatting
        ts_object = dedent("""\
        {{
            id: {id},
            name: "{name}",
            sku: "{sku}",
            category: "{category}",
            brandName: "{brandName}",
            ahCapacity: {ahCapacity},
            cca: {cca},
            warrantyMonths: {warrantyMonths},
            priceAnchor: "{priceAnchor}",
            isAGM: {isAGM},
            imagePath: "{imagePath}",
            popularFits: "{popularFits}",
            isScrapPrice: {isScrapPrice},
            seoSubtitle: "{seoSubtitle}"
        }}""".format(
            id=product['id'],
            name=product['name'].replace('"', '\\"'), # Escape quotes in name
            sku=product['sku'].replace('"', '\\"'),
            category=product['category'],
            brandName=product['brandName'],
            ahCapacity=product['ahCapacity'],
            cca=product['cca'],
            warrantyMonths=product['warrantyMonths'],
            priceAnchor=product['priceAnchor'],
            isAGM=str(product['isAGM']).lower(),
            imagePath=product['imagePath'],
            popularFits=product['popularFits'].replace('"', '\\"'), # Escape quotes
            isScrapPrice=str(product['isScrapPrice']).lower(),
            seoSubtitle=product['seoSubtitle'] # Add new field
        ))
        ts_data_rows.append(ts_object)

    # --- UPDATED: Add seoSubtitle to the TypeScript interface ---
    ts_interface = dedent("""\
        export interface ProductCardData {
          id: number;
          name: string; 
          sku: string;
          category: string;
          brandName: string;
          ahCapacity: number; 
          cca: number; 
          warrantyMonths: number; 
          priceAnchor: string; // The displayed price string (e.g., 'R 1,200.00')
          isAGM: boolean; 
          imagePath: string;
          popularFits: string; // e.g., "Toyota Tazz, VW Polo Vivo"
          isScrapPrice: boolean; // TRUE if price requires trade-in
          seoSubtitle: string; // e.g., "Car Battery in Alberton"
        }""")

    ts_content = dedent("""\
        // src/data/products.ts
        // This file is generated automatically from product_master_template.csv
        // DO NOT EDIT THIS FILE DIRECTLY. Edit 'product_script_final.py' and run it.

{ts_interface}

        export const ALL_PRODUCTS: ProductCardData[] = [
{data_rows}
        ];
    """).format(
        ts_interface=ts_interface,
        data_rows=",\n".join(ts_data_rows)
    )
    return ts_content

# --- 3. Main Execution (Convert and Write to TS) ---

if __name__ == "__main__":
    try:
        # Step 1: Write hardcoded data to CSV
        
        # --- FIX: Add 'seoSubtitle' to fieldnames for the CSV writer ---
        if 'seoSubtitle' not in fieldnames:
            fieldnames.append('seoSubtitle')

        # --- Pre-process products list to add seoSubtitle before writing to CSV ---
        processed_products = []
        for p in products:
            p_copy = p.copy()
            # Add placeholders for any missing fields to avoid errors
            for field in fieldnames:
                if field not in p_copy:
                    p_copy[field] = ''
            # Generate seoSubtitle for the CSV
            p_copy['seoSubtitle'] = get_seo_subtitle(p_copy['category'])
            processed_products.append(p_copy)

        with open(csv_file_path, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(processed_products)
        print(f"✅ CSV template created/overwritten with {len(processed_products)} products: {os.path.abspath(csv_file_path)}")

        # Step 2: Read from CSV (that was just written) and Write to TypeScript
        raw_data_for_ts = read_csv_data(csv_file_path)
        ts_content = format_to_typescript(raw_data_for_ts)

        os.makedirs(output_dir, exist_ok=True)
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        print(f"✅ TypeScript data file successfully created/updated at: {os.path.abspath(output_file)}")

        print(f"\n✅ Data is ready. {len(processed_products)} total products loaded. Run 'pnpm run dev' to see your changes.")

    except Exception as e:
        print(f"\n❌ A critical error occurred during script execution: {e}")