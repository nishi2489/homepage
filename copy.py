import os
import pyperclip

def copy_files_contents():
    # 検索を開始するフォルダのパス
    folder_path = r"C:\Users\NishiharaKatsuhiko\Desktop\python\AI\shoei-engineer-main"
    
    # 検索対象のファイル名リスト
    target_files = [
        "Services.module.css",
        "Header.tsx",
        "Hero.tsx",
        "Recruitment.tsx",
        "ServicesTab.tsx",
        "ContactForm.tsx",
        "route.ts",
        "RecruitTab.tsx",
        ]
    
    try:
        # 見つかったファイルの中身を連結するためのリスト
        combined_content = []
        # 見つかったファイル名を記録するためのセット
        found_file_names = set()
        
        # os.walk を使ってサブフォルダを含む再帰的な検索を行う
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                # ファイル名が検索対象のリストに含まれるか判定
                if file in target_files:
                    file_path = os.path.join(root, file)
                    
                    try:
                        # ファイルの中身を読み込み
                        with open(file_path, "r", encoding="utf-8") as f:
                            content = f.read()
                        
                        # 見つかったファイルを記録
                        found_file_names.add(file)
                        
                        # 見出しとしてファイル名を追加し、内容を追記
                        combined_content.append(f"===== {file} =====\n{content}\n")
                    except Exception as e:
                        print(f"ファイル {file} の読み込み中にエラーが発生しました: {e}")
        
        # 見つからなかったファイル名に対するメッセージを追加
        not_found = set(target_files) - found_file_names
        for file in not_found:
            combined_content.append(f"{file} は存在しません。\n")
        
        # 全ファイルの内容をひとつの文字列にまとめる
        final_text = "\n".join(combined_content)
        
        # クリップボードへコピー
        pyperclip.copy(final_text)
        
        print("コピーが完了しました。")
        print(f"見つかったファイル: {len(found_file_names)}個")
        print(f"見つからなかったファイル: {len(not_found)}個")
        
    except Exception as e:
        print(f"エラーが発生しました: {e}")

if __name__ == "__main__":
    copy_files_contents()
