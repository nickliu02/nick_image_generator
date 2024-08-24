import os


def rename_images(directory):
    # Get a list of files in the directory
    files = os.listdir(directory)

    # Filter only image files (assuming jpg and jpeg extensions)
    images = [f for f in files if f.lower().endswith((".jpg", ".jpeg"))]

    # Sort or shuffle images if needed
    images.sort()  # You can use random.shuffle(images) if you want random order

    # Rename images to 1.jpg, 2.jpg, etc.
    for i, filename in enumerate(images, start=1):
        new_name = f"{i}.jpg"
        src = os.path.join(directory, filename)
        dst = os.path.join(directory, new_name)
        os.rename(src, dst)

    print(f"Renamed {len(images)} images.")


# Example usage:
directory_path = "imgs"
rename_images(directory_path)
