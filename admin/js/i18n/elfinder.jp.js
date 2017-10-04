/**
 * Japanese translation
 * @author Tomoaki Yoshida <info@yoshida-studio.jp>
 * @author Naoki Sawada <hypweb@gmail.com>
 * @version 2017-08-15
 */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['elfinder'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('elfinder'));
	} else {
		factory(root.elFinder);
	}
}(this, function(elFinder) {
	elFinder.prototype.i18.jp = {
		translator : 'Tomoaki Yoshida &lt;info@yoshida-studio.jp&gt;, Naoki Sawada &lt;hypweb@gmail.com&gt;',
		language   : 'Japanese',
		direction  : 'ltr',
		dateFormat : 'Y/m/d h:i A', // Mar 13, 2012 05:27 PM
		fancyDateFormat : '$1 h:i A', // will produce smth like: Today 12:25 PM
		nonameDateFormat : 'ymd-His', // to apply if upload file is noname: 120513172700
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'エラー',
			'errUnknown'           : '不明なエラーです。',
			'errUnknownCmd'        : '不明なコマンドです。',
			'errJqui'              : '無効な jQuery UI 設定です。Selectable, Draggable, Droppable コンポーネントを含める必要があります。',
			'errNode'              : 'elFinder は DOM Element が必要です。',
			'errURL'               : '無効な elFinder 設定です！ URLを設定されていません。',
			'errAccess'            : 'アクセスが拒否されました。',
			'errConnect'           : 'バックエンドとの接続ができません。',
			'errAbort'             : '接続が中断されました。',
			'errTimeout'           : '接続がタイムアウトしました。',
			'errNotFound'          : 'バックエンドが見つかりません。',
			'errResponse'          : '無効なバックエンドレスポンスです。',
			'errConf'              : 'バックエンドの設定が有効ではありません。',
			'errJSON'              : 'PHP JSON モジュールがインストールされていません。',
			'errNoVolumes'         : '読み込み可能なボリュームがありません。',
			'errCmdParams'         : 'コマンド "$1"のパラメーターが無効です。',
			'errDataNotJSON'       : 'JSONデータではありません。',
			'errDataEmpty'         : '空のデータです。',
			'errCmdReq'            : 'バックエンドリクエストはコマンド名が必要です。',
			'errOpen'              : '"$1" を開くことができません。',
			'errNotFolder'         : 'オブジェクトがフォルダーではありません。',
			'errNotFile'           : 'オブジェクトがファイルではありません。',
			'errRead'              : '"$1" を読み込むことができません。',
			'errWrite'             : '"$1" に書き込むことができません。',
			'errPerm'              : '権限がありません。',
			'errLocked'            : '"$1" はロックされているので名前の変更、移動、削除ができません。',
			'errExists'            : '"$1" というアイテム名はすでに存在しています。',
			'errInvName'           : '無効なファイル名です。',
			'errInvDirname'        : '無効なフォルダ名です。',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'フォルダーが見つかりません。',
			'errFileNotFound'      : 'ファイルが見つかりません。',
			'errTrgFolderNotFound' : 'ターゲットとするフォルダー "$1" が見つかりません。',
			'errPopup'             : 'ポップアップウィンドウが開けません。ファイルを開くにはブラウザの設定を変更してください。',
			'errMkdir'             : 'フォルダー "$1" を作成することができません。',
			'errMkfile'            : 'ファイル "$1" を作成することができません。',
			'errRename'            : '"$1" の名前を変更することができません。',
			'errCopyFrom'          : '"$1" からのファイルコピーは許可されていません。',
			'errCopyTo'            : '"$1" へのファイルコピーは許可されていません。',
			'errMkOutLink'         : 'ボリュームルート外へのリンクを作成することはできません。', // from v2.1 added 03.10.2015
			'errUpload'            : 'アップロードエラー',  // old name - errUploadCommon
			'errUploadFile'        : '"$1" をアップロードすることができません。', // old name - errUpload
			'errUploadNoFiles'     : 'アップロードされたファイルはありません。',
			'errUploadTotalSize'   : 'データが許容サイズを超えています。', // old name - errMaxSize
			'errUploadFileSize'    : 'ファイルが許容サイズを超えています。', //  old name - errFileMaxSize
			'errUploadMime'        : '許可されていないファイル形式です。',
			'errUploadTransfer'    : '"$1" 転送エラーです。',
			'errUploadTemp'        : 'アップロード用一時ファイルを作成できません。', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'アイテム "$1" はすでにこの場所にあり、アイテムのタイプが違うので置き換えることはできません。', // new
			'errReplace'           : '"$1" を置き換えることができません。',
			'errSave'              : '"$1" を保存することができません。',
			'errCopy'              : '"$1" をコピーすることができません。',
			'errMove'              : '"$1" を移動することができません。',
			'errCopyInItself'      : '"$1" をそれ自身の中にコピーすることはできません。',
			'errRm'                : '"$1" を削除することができません。',
			'errTrash'             : 'ごみ箱に入れることができません。', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : '元ファイルを削除することができません。',
			'errExtract'           : '"$1" を解凍することができません。',
			'errArchive'           : 'アーカイブを作成することができません。',
			'errArcType'           : 'サポート外のアーカイブ形式です。',
			'errNoArchive'         : 'アーカイブでないかサポートされていないアーカイブ形式です。',
			'errCmdNoSupport'      : 'サポートされていないコマンドです。',
			'errReplByChild'       : 'フォルダ "$1" に含まれてるアイテムを置き換えることはできません。',
			'errArcSymlinks'       : 'シンボリックリンクまたは許容されないファイル名を含むアーカイブはセキュリティ上、解凍できません。', // edited 24.06.2012
			'errArcMaxSize'        : 'アーカイブが許容されたサイズを超えています。',
			'errResize'            : '"$1" のリサイズまたは回転ができません。',
			'errResizeDegree'      : 'イメージの回転角度が不正です。',  // added 7.3.2013
			'errResizeRotate'      : 'イメージを回転できません。',  // added 7.3.2013
			'errResizeSize'        : '指定されたイメージサイズが不正です。',  // added 7.3.2013
			'errResizeNoChange'    : 'イメージサイズなどの変更点がありません。',  // added 7.3.2013
			'errUsupportType'      : 'このファイルタイプはサポートされていません。',
			'errNotUTF8Content'    : 'ファイル "$1" には UTF-8 以外の文字が含まれているので編集できません。',  // added 9.11.2011
			'errNetMount'          : '"$1" をマウントできません。', // added 17.04.2012
			'errNetMountNoDriver'  : 'サポートされていないプロトコルです。',     // added 17.04.2012
			'errNetMountFailed'    : 'マウントに失敗しました。',         // added 17.04.2012
			'errNetMountHostReq'   : 'ホスト名は必須です。', // added 18.04.2012
			'errSessionExpires'    : 'アクションがなかったため、セッションが期限切れになりました。',
			'errCreatingTempDir'   : '一時ディレクトリを作成できません："$1"',
			'errFtpDownloadFile'   : 'FTP からファイルをダウンロードできません："$1"',
			'errFtpUploadFile'     : 'FTP へファイルをアップロードできません："$1"',
			'errFtpMkdir'          : 'FTP にリモートディレクトリを作成できません："$1"',
			'errArchiveExec'       : 'ファイルのアーカイブ中にエラーが発生しました："$1"',
			'errExtractExec'       : 'ファイルの抽出中にエラーが発生しました："$1"',
			'errNetUnMount'        : 'アンマウントできません。', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'UTF-8 に変換できませんでした。', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'フォルダをアップロードしたいのであれば、モダンブラウザを試してください。', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : '"$1" を検索中にタイムアウトしました。検索結果は部分的です。', // from v2.1 added 12.1.2016
			'errReauthRequire'     : '再認可が必要です。', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : '選択可能な最大アイテム数は $1 個です。', // from v2.1.17 added 17.10.2016
			'errRestore'           : '宛先の特定ができないため、ごみ箱から戻せません。', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'このファイルタイプのエディターがありません。', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'サーバー側でエラーが発生しました。', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'フォルダー"$1"を空にすることができません。', // from v2.1.25 added 22.6.2017
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'アーカイブ作成',
			'cmdback'      : '戻る',
			'cmdcopy'      : 'コピー',
			'cmdcut'       : 'カット',
			'cmddownload'  : 'ダウンロード',
			'cmdduplicate' : '複製',
			'cmdedit'      : 'ファイル編集',
			'cmdextract'   : 'アーカイブを解凍',
			'cmdforward'   : '進む',
			'cmdgetfile'   : 'ファイル選択',
			'cmdhelp'      : 'このソフトウェアについて',
			'cmdhome'      : 'ルート',
			'cmdinfo'      : '情報',
			'cmdmkdir'     : '新規フォルダー',
			'cmdmkdirin'   : '新規フォルダーへ', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : '新規テキストファイル',
			'cmdopen'      : '開く',
			'cmdpaste'     : 'ペースト',
			'cmdquicklook' : 'プレビュー',
			'cmdreload'    : 'リロード',
			'cmdrename'    : 'リネーム',
			'cmdrm'        : '削除',
			'cmdtrash'     : 'ごみ箱へ', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : '復元', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'ファイルを探す',
			'cmdup'        : '親ディレクトリーへ移動',
			'cmdupload'    : 'ファイルアップロード',
			'cmdview'      : 'ビュー',
			'cmdresize'    : 'リサイズと回転',
			'cmdsort'      : 'ソート',
			'cmdnetmount'  : 'ネットワークボリュームをマウント', // added 18.04.2012
			'cmdnetunmount': 'アンマウント', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'お気に入りへ', // added 28.12.2014
			'cmdchmod'     : '属性変更', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'フォルダを開く', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : '列幅リセット', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'フルスクリーン', // from v2.1.15 added 03.08.2016
			'cmdmove'      : '移動', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'フォルダーを空に', // from v2.1.25 added 22.06.2017
			'cmdundo'      : '元に戻す', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'やり直し', // from v2.1.27 added 31.07.2017
			'cmdpreference': '環境設定', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'すべて選択', // from v2.1.28 added 15.08.2017
			'cmdselectnone': '選択解除', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': '選択を反転', // from v2.1.28 added 15.08.2017

			/*********************************** buttons ***********************************/
			'btnClose'  : '閉じる',
			'btnSave'   : '保存',
			'btnRm'     : '削除',
			'btnApply'  : '適用',
			'btnCancel' : 'キャンセル',
			'btnNo'     : 'いいえ',
			'btnYes'    : 'はい',
			'btnMount'  : 'マウント',  // added 18.04.2012
			'btnApprove': '$1へ行き認可する', // from v2.1 added 26.04.2012
			'btnUnmount': 'アンマウント', // from v2.1 added 30.04.2012
			'btnConv'   : '変換', // from v2.1 added 08.04.2014
			'btnCwd'    : 'この場所',      // from v2.1 added 22.5.2015
			'btnVolume' : 'ボリューム',    // from v2.1 added 22.5.2015
			'btnAll'    : '全て',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIMEタイプ', // from v2.1 added 22.5.2015
			'btnFileName':'ファイル名',  // from v2.1 added 22.5.2015
			'btnSaveClose': '保存して閉じる', // from v2.1 added 12.6.2015
			'btnBackup' : 'バックアップ', // fromv2.1 added 28.11.2015
			'btnRename'    : 'リネーム',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'リネーム(全て)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : '前へ ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : '次へ ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : '別名保存', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'フォルダーを開いています',
			'ntffile'     : 'ファイルを開いています',
			'ntfreload'   : 'フォルダーを再読込しています',
			'ntfmkdir'    : 'フォルダーを作成しています',
			'ntfmkfile'   : 'ファイルを作成しています',
			'ntfrm'       : 'ファイルを削除しています',
			'ntfcopy'     : 'ファイルをコピーしています',
			'ntfmove'     : 'ファイルを移動しています',
			'ntfprepare'  : '既存アイテムを確認しています',
			'ntfrename'   : 'ファイル名を変更しています',
			'ntfupload'   : 'ファイルをアップロードしています',
			'ntfdownload' : 'ファイルをダウンロードしています',
			'ntfsave'     : 'ファイルを保存しています',
			'ntfarchive'  : 'アーカイブ作成しています',
			'ntfextract'  : 'アーカイブを解凍しています',
			'ntfsearch'   : 'ファイル検索中',
			'ntfresize'   : 'リサイズしています',
			'ntfsmth'     : '処理をしています',
			'ntfloadimg'  : 'イメージを読み込んでいます',
			'ntfnetmount' : 'ネットボリュームをマウント中', // added 18.04.2012
			'ntfnetunmount': 'ネットボリュームをアンマウント中', // from v2.1 added 30.04.2012
			'ntfdim'      : '画像サイズを取得しています', // added 20.05.2013
			'ntfreaddir'  : 'ホルダ情報を読み取っています', // from v2.1 added 01.07.2013
			'ntfurl'      : 'リンクURLを取得しています', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'ファイル属性を変更しています', // from v2.1 added 20.6.2015
			'ntfpreupload': 'アップロードファイル名を検証中', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'ダウンロード用ファイルを作成中', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'パス情報を取得しています', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'アップロード済みファイルを処理中', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'ごみ箱に入れています', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'ごみ箱から元に戻しています', // from v2.1.24 added 2.5.2017
			'ntfchkdir'   : '宛先ホルダーを確認しています', // from v2.1.24 added 3.5.2017
			'ntfundo'     : '前の操作を取り消して元に戻しています', // from v2.1.27 added 31.07.2017
			'ntfredo'     : '元に戻した操作をやり直しています', // from v2.1.27