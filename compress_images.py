from PIL import Image
import os

print("=" * 50)
print("图片压缩对比")
print("=" * 50)

for i in range(1, 8):
    filename = f"项目1_{i}.png"
    path = f"photo/{filename}"
    
    if not os.path.exists(path):
        continue
    
    img = Image.open(path)
    original_size = os.path.getsize(path)
    
    # 方案1: PNG optimize（无损）
    img.save(path, optimize=True)
    optimized_size = os.path.getsize(path)
    
    # 方案2: 转 WebP（有损但肉眼几乎看不出）
    webp_path = f"photo/项目1_{i}.webp"
    img.save(webp_path, "WEBP", quality=85, method=6)
    webp_size = os.path.getsize(webp_path)
    
    print(f"\n项目1_{i}:")
    print(f"  原始PNG: {original_size/1024:.0f} KB")
    print(f"  优化PNG: {optimized_size/1024:.0f} KB ({(1-optimized_size/original_size)*100:.0f}%↓)")
    print(f"  WebP:    {webp_size/1024:.0f} KB ({(1-webp_size/original_size)*100:.0f}%↓)")

print("\n" + "=" * 50)
print("说明:")
print("- 优化PNG: 无损压缩，已覆盖原文件")
print("- WebP: 体积更小，需要把代码里的 .png 改成 .webp")
print("=" * 50)
